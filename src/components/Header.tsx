'use client';

export default function Header() {
  return (
    <header className="w-full py-6 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">YourLogo</div>
      <nav className="space-x-6 hidden md:flex">
        <a href="#features" className="text-gray-700 hover:text-black">
          Features
        </a>
        <a href="#cta" className="text-gray-700 hover:text-black">
          Get Started
        </a>
      </nav>
      <button className="md:hidden">Menu</button>
    </header>
  );
}
