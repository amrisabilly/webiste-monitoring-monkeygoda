import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function ArPreview() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <Head title="Lihat Produk AR" />
            
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 border-b flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-800">Preview Produk 3D</h1>
                    <Link href="/" className="text-blue-600 hover:underline">Kembali ke Landing</Link>
                </div>

                {/* Area Model Viewer */}
                <div className="w-full h-[500px] bg-slate-50 relative">
                    <model-viewer
                        src="/assets/table.glb" // Sesuaikan dengan lokasi file kamu
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        poster="/assets/images/loading-poster.webp" // Opsional: gambar loading
                        shadow-intensity="1"
                        auto-rotate
                        style={{ width: '100%', height: '100%', outline: 'none' }}
                    >
                        {/* Tombol AR Custom */}
                        <button slot="ar-button" className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg font-semibold flex items-center gap-2">
                            <span>📷 Lihat di Ruangan (AR)</span>
                        </button>
                    </model-viewer>
                </div>

                <div className="p-6">
                    <h2 className="text-lg font-semibold">Instruksi:</h2>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Gunakan satu jari untuk memutar objek.</li>
                        <li>Gunakan dua jari untuk memperbesar (zoom).</li>
                        <li>Klik tombol biru untuk melihat objek langsung di lantai ruangan kamu (khusus di smartphone).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}