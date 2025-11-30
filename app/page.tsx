export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <main className="flex flex-col items-center justify-center text-center max-w-2xl">
        {/* Icon */}
        <div className="mb-8">
          <svg
            className="w-20 h-20 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
          We&rsquo;re Currently Migrating
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-zinc-600 mb-4 leading-relaxed">
          Our services are temporarily offline as we migrate to a new infrastructure.
        </p>

        <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
          We&rsquo;ll be back online in a few days. Thank you for your patience.
        </p>
      </main>
    </div>
  );
}
