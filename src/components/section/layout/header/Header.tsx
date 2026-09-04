export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-gray-100 dark:bg-zinc-900 w-full">
      <h1>Web Journey</h1>

      <nav >
        <ul className="flex gap-5">
          <li><a href="/">Home</a></li>
          <li><a href="https://github.com/Mikael-Antony/WebJourney" target="_blank">About</a></li>
          <li><a href="mailto:contato.mikaelalbuquerque@gmail.com">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}