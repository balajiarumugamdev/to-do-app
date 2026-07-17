function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      {/* Card that holds the whole app, centered on the page */}
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow">
        {/* 1. Title */}
        <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
          My To-Do List
        </h1>

        {/* 2 + 3. Text box and Add button, side by side */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="What needs doing?"
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="button"
            className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
          >
            Add
          </button>
        </div>

        {/* 4. The list area (empty for now) */}
        <ul className="mt-6 space-y-2">
          <li className="text-center text-slate-400">No tasks yet</li>
        </ul>
      </div>
    </div>
  )
}

export default App
