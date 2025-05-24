// components/QRCodeButton.tsx

"use client";

// External libraries
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useRef, useState } from "react";
import { FaQrcode } from "react-icons/fa6";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const { receipt } = getActiveReceipt();

export default function QRCodeButton() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const qrRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const downloadQRCode = async () => {
    if (!qrRef.current || !currentUrl) return;

    const canvas = document.createElement("canvas");
    const size = 1047;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, size, size);

    // Render QR Code to offscreen canvas with margin
    const qrCanvas = qrRef.current;
    const qrSize = size * 0.88; // 88% of full size
    const qrX = (size - qrSize) / 2;
    const qrY = (size - qrSize) / 2;
    ctx.drawImage(qrCanvas, qrX, qrY, qrSize, qrSize);

    // Load and draw logo at center with white background
    const logo = new Image();
    logo.src = receipt.proLogo;
    logo.onload = () => {
      const logoSize = 111;
      const logoX = (size - logoSize) / 2;
      const logoY = (size - logoSize) / 2;

      // Draw white rounded background behind logo
      const padding = 11;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, logoSize / 2 + padding, 0, Math.PI * 2);
      ctx.fill();

      ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);

      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = "qr-code.png";
      link.click();
    };
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Hidden QR generator for rendering */}
      <div className="hidden">
        {currentUrl && (
          <QRCodeCanvas
            value={currentUrl}
            size={1047}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            ref={qrRef}
          />
        )}
      </div>

      {/* Download Button */}
      <button
        onClick={downloadQRCode}
        style={{
          backgroundColor: receipt.colorBoxIcon,
          color: receipt.colorIcon,
        }}
        className="w-10 h-10 flex items-center justify-center text-xl rounded-lg cursor-pointer"
        aria-label="Download QR Code">
        <FaQrcode />
      </button>
    </div>
  );
}
