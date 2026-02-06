
import { Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <div className='min-h-screen bg-sky-200 flex justify-center items-center'>
                <h1 className='text-2xl font-bold'>Hello World</h1>
            </div>
            <Link 
                href={route('ar.preview')} 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
                Coba Fitur AR
            </Link>
        </>
    );
}
