import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Lightbulb, ScanLine, Check, X } from "lucide-react";
import { toast } from "sonner";

export default function BarcodeScannerScreen() {
  const navigate = useNavigate();
  const [showDetection, setShowDetection] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setShowDetection(true);
    }, 2000);
  };

  const handleConfirm = () => {
    toast.success("Item added to pantry!");
    setTimeout(() => {
      navigate("/pantry");
    }, 500);
  };

  const handleCancel = () => {
    setShowDetection(false);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 px-6 pt-12 pb-6 z-10 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white">Scan Barcode</h2>
          <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Lightbulb className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Camera View Simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] via-[#1F1F1F] to-[#1A1A1A]"></div>

      {/* Scan Frame */}
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className="relative w-full max-w-sm aspect-[4/3]">
          {/* Animated Scan Line */}
          <div
            className={`absolute inset-0 border-2 rounded-3xl overflow-hidden transition-all ${
              isScanning
                ? "border-[#7BA884] shadow-[0_0_30px_rgba(123,168,132,0.5)]"
                : "border-[#7BA884]/40"
            }`}
          >
            {isScanning && (
              <div className="scan-line absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7BA884] to-transparent shadow-[0_0_20px_rgba(123,168,132,0.8)]"></div>
            )}
          </div>

          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#7BA884] rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#7BA884] rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#7BA884] rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#7BA884] rounded-br-3xl"></div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#7BA884]/5 rounded-3xl blur-xl"></div>
        </div>
      </div>

      {/* Instructions or Detection Status */}
      {!showDetection && (
        <div className="absolute bottom-32 left-0 right-0 px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ScanLine className="w-6 h-6 text-[#7BA884]" />
            <p className="text-white/90">
              {isScanning ? "Scanning..." : "Position barcode within frame"}
            </p>
          </div>
          {!isScanning && (
            <p className="text-white/60 text-sm">
              The scanner will automatically detect your product
            </p>
          )}
        </div>
      )}

      {/* Capture Button */}
      {!showDetection && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center px-8">
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl relative group disabled:opacity-70"
          >
            <div className="absolute inset-0 bg-[#7BA884] rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="w-16 h-16 border-4 border-[#7BA884] rounded-full"></div>
          </button>
        </div>
      )}

      {/* Product Detection Popup */}
      {showDetection && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-6 animate-fade-in">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-[#7BA884]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-[#7BA884]" />
              </div>
              <h3 className="text-[#3D3D3D] mb-2">Product Detected!</h3>
              <p className="text-sm text-[#8B8B8B]">
                We found this item in our database
              </p>
            </div>

            <div className="bg-[#F5F1ED] rounded-2xl p-4 mb-6">
              <p className="text-[#3D3D3D] mb-2">Organic Whole Milk</p>
              <p className="text-sm text-[#8B8B8B] mb-1">Brand: Organic Valley</p>
              <p className="text-sm text-[#8B8B8B]">Size: 1 Gallon</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleCancel}
                className="py-3 px-4 bg-[#F5F1ED] text-[#3D3D3D] rounded-xl hover:bg-[#E8D5C4] transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-5 h-5" />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleConfirm}
                className="py-3 px-4 bg-[#7BA884] text-white rounded-xl hover:bg-[#5D8C6B] transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                <span>Confirm</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Animation */}
      <style>{`
        @keyframes scan {
          0% {
            top: 0;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 0;
          }
        }
        .scan-line {
          animation: scan 2s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
