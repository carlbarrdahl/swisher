import React from "react"
import QRCode from "qrcode.react"

export default ({ number, message, amount }) => (
  <div className="text-center mb-2">
    <QRCode
      fgColor="#22292F"
      bgColor="#ffffff"
      level="Q"
      size={200}
      value={`C${number};${amount};${message};0`}
    />
  </div>
)
