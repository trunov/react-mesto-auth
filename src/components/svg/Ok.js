import * as React from "react";

function Ok(props) {
  return (
    <svg className="popup__icon"
      width={120}
      height={120}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117 60c0 31.48-25.52 57-57 57S3 91.48 3 60 28.52 3 60 3s57 25.52 57 57zm3 0c0 33.137-26.863 60-60 60S0 93.137 0 60 26.863 0 60 0s60 26.863 60 60zM57.55 76.888l29.218-28-5.536-5.776L54.428 68.8 39.35 57.856l-4.7 6.474 17.783 12.907 2.705 1.963 2.412-2.312z"
        fill="#000"
      />
    </svg>
  );
}

export default Ok;