export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-4 sm:mt-6 lg:mt-8">
      <div className="max-w-full lg:max-w-[1360px] xl:max-w-[1600px] mx-auto px-2 sm:px-4 py-3 sm:py-4 lg:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <div className="text-xs sm:text-sm text-gray-600">
            © 2024 AiXHub. All rights reserved.
          </div>
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 text-[10px] sm:text-xs text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
            <a href="#" className="hover:text-gray-900 transition-colors hidden sm:inline">Documentation</a>
          </div>
        </div>
        <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-gray-400 text-center sm:text-left">
          Cognitive Procurement & Services Hub - Powered by AI
        </div>
      </div>
    </footer>
  );
}