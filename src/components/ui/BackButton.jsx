export default function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            className="mb-6 text-green-500 hover:text-green-400 transition-colors"
        >
            &larr; Back
        </button>
    );
}