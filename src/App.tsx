import { useState } from "react";
import PreviewStatic from "./preview-static";
import Draft01 from "./draft01";
import { Button } from "./components/ui/button";
import { ArrowLeft, Eye } from "lucide-react";

type Page = "home" | "preview-static" | "draft01";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Floating navigation for prototypes
  const FloatingNav = ({ otherVersion }: { otherVersion: Page }) => (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3">
      <Button
        onClick={() => setCurrentPage("home")}
        className="bg-white text-foreground hover:bg-white/90 shadow-2xl flex items-center gap-2"
        size="lg"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Menu
      </Button>
      <Button
        onClick={() => setCurrentPage(otherVersion)}
        className="bg-[#8B4513] text-white hover:bg-[#6a3410] shadow-2xl flex items-center gap-2"
        size="lg"
      >
        <Eye className="h-5 w-5" />
        View {otherVersion === "preview-static" ? "Preview" : "Draft 01"}
      </Button>
    </div>
  );

  // Landing page
  if (currentPage === "home") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f5f1ed] via-[#e8dfd3] to-[#d4c4b0] flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-[#8B4513] rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full" />
              </div>
              <div>
                <h1 className="text-4xl tracking-widest text-[#8B4513]">BELHARRA</h1>
                <p className="text-sm tracking-wider text-gray-600">WINES</p>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">
              Client Prototype Preview
            </h2>
            <p className="text-gray-600 text-lg">
              Select a version to view the interactive prototype
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Preview Static Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#8B4513] to-[#5d2e0f] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-3">📄</div>
                  <div className="text-2xl tracking-wider">PREVIEW</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-3 text-gray-800">Preview Static</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Clean and minimal design matching the original Figma mockup. Features 
                  simplified navigation and essential content sections.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ Hero Section</li>
                  <li>✓ Raw Authentic Section</li>
                  <li>✓ Discover Wines</li>
                  <li>✓ Tasting Room</li>
                </ul>
                <Button
                  onClick={() => setCurrentPage("preview-static")}
                  className="w-full bg-[#8B4513] text-white hover:bg-[#6a3410] py-6 text-lg"
                >
                  View Preview Static
                </Button>
              </div>
            </div>

            {/* Draft 01 Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-[1.02]">
              <div className="h-48 bg-gradient-to-br from-[#4a2c1f] to-[#2a1810] flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-3">✨</div>
                  <div className="text-2xl tracking-wider">DRAFT 01</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-3 text-gray-800">Draft 01</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enhanced version with additional features and detailed content. 
                  Includes expanded sections and comprehensive information.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>✓ Extended Hero with Dual CTAs</li>
                  <li>✓ Detailed Wine Collection</li>
                  <li>✓ Enhanced Tasting Room</li>
                  <li>✓ Comprehensive Footer</li>
                </ul>
                <Button
                  onClick={() => setCurrentPage("draft01")}
                  className="w-full bg-[#4a2c1f] text-white hover:bg-[#3a1c0f] py-6 text-lg"
                >
                  View Draft 01
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-lg shadow-lg p-6 max-w-2xl">
              <p className="text-sm text-gray-600 mb-3">
                <strong>Navigation Tips:</strong>
              </p>
              <p className="text-sm text-gray-600">
                Use the floating buttons in the bottom-right corner to navigate between 
                versions or return to this menu. All links and buttons within the prototypes 
                are for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Preview Static page
  if (currentPage === "preview-static") {
    return (
      <>
        <PreviewStatic />
        <FloatingNav otherVersion="draft01" />
      </>
    );
  }

  // Draft 01 page
  if (currentPage === "draft01") {
    return (
      <>
        <Draft01 />
        <FloatingNav otherVersion="preview-static" />
      </>
    );
  }

  return null;
}
