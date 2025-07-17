import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { FaEdit, FaTrash, FaCopy } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';


const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId){
      dispatch(removeFromPastes(pasteId));
  }
    function handleCopy(pasteId){
    navigator.clipboard.writeText( `${window.location.origin}/pastes/${pasteId}`);
    alert("Link copied to clipboard!");
  };
  return (
    <div className="p-4">
      <input
        className="p-2 rounded-2xl min-w-[600px] mt-5 border border-black"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-4">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
            <div className="border px-4 py-2 mb-3 rounded flex flex-col gap-1 border-black" key={paste?._id}>
            {/* Row: Title (left) and Actions (right) */}
            <div className="flex justify-between items-center">
            {/* Paste Title */}
            <div className="text-xl font-semibold text-black">{paste.title}</div>

            {/* Action Buttons */}
            <div className="flex gap-2">
            <a
              href={`/?pasteId=${paste?._id}`}
              title="Edit"
              className="p-2 rounded bg-white hover:text-blue-400"
            >
              <FaEdit />
            </a>
            <a
              href={`/pastes/${paste?._id}`}
              title="View"
              className="p-2 rounded bg-white hover:text-yellow-400"
            >
              <AiOutlineEye />
            </a>
            <button
              onClick={() => handleDelete(paste?._id)}
              title="Delete"
              className="p-2 rounded bg-white hover:text-red-400"
            >
              <FaTrash />
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(paste?.content);
                toast.success("Copied to clipboard");
              }}
              title="Copy"
              className="p-2 rounded bg-white hover:text-purple-400"
            >
              <FaCopy />
            </button>
            <button
              onClick={() => handleCopy(paste?._id)}
              title="Share"
              className="p-2 rounded bg-white hover:text-green-400"
            >
              <FiShare2 />
            </button>
            </div>
            </div>

            {/* Created At */}
            <div className="text-sm text-black ml-1">
            {new Date(paste.createdAt).toLocaleString()}
            </div>
            </div>
            );

              })}
            </div>
            </div>
  );
};

export default Paste;
