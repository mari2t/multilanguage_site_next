import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">My App</h1>
      <LanguageSwitcher />
    </header>
  );
}
