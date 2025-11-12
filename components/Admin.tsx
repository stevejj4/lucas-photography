import React, { useState } from 'react';

// Admin panel for Lucas to upload pictures locally.
// Uses the File System Access API when available (Chrome/Edge) and falls back to download links.
const Admin: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setSelectedFiles(Array.from(e.target.files));
    setMessage(null);
  };

  const saveFilesToFolder = async () => {
    if (selectedFiles.length === 0) {
      setMessage('No files selected');
      return;
    }

    // Try File System Access API
    // @ts-ignore - navigator.showDirectoryPicker is optional
    if (window && (window as any).showDirectoryPicker) {
      try {
        // @ts-ignore
        const dirHandle = await (window as any).showDirectoryPicker();
        for (const file of selectedFiles) {
          const fileHandle = await dirHandle.getFileHandle(file.name, { create: true });
          const writable = await fileHandle.createWritable();
          await writable.write(await file.arrayBuffer());
          await writable.close();
        }
        setMessage(`Saved ${selectedFiles.length} file(s) to selected folder`);
      } catch (err: any) {
        setMessage('Cancelled or permission denied');
      }
      return;
    }

    // Fallback: prompt user to download each file
    try {
      for (const file of selectedFiles) {
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
      setMessage(`Triggered download for ${selectedFiles.length} file(s)`);
    } catch (err) {
      setMessage('Failed to download files');
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-800 text-gray-100">
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Admin — Upload Photos</h1>
        <p className="text-sm text-gray-400 mb-4">Select images to save locally. For the best experience use Chrome/Edge so you can choose a folder.</p>

        <input type="file" accept="image/*" multiple onChange={onFileChange} className="mb-4" />

        <div className="flex items-center space-x-3">
          <button onClick={saveFilesToFolder} className="px-4 py-2 bg-amber-400 text-black rounded font-medium">Save</button>
          <button onClick={() => { setSelectedFiles([]); setMessage(null); }} className="px-4 py-2 border border-gray-700 rounded">Clear</button>
        </div>

        {selectedFiles.length > 0 && (
          <div className="mt-4 text-sm">
            <strong>Selected files:</strong>
            <ul className="list-disc ml-6 mt-2 text-gray-300">
              {selectedFiles.map((f) => (
                <li key={f.name + f.size}>{f.name} ({Math.round(f.size/1024)} KB)</li>
              ))}
            </ul>
          </div>
        )}

        {message && <div className="mt-4 text-sm text-amber-300">{message}</div>}
      </div>
    </div>
  );
};

export default Admin;
