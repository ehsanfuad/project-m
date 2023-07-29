import React from 'react'

const fileURL = ''; // Replace with the actual URL of your file

  return (
    <a
      href={fileURL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Click here to open the file in a new tab
    </a>
  );
};

export default FileLink;
