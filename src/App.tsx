import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-6">
      <div className="max-w-lg w-full rounded-2xl bg-white p-8 shadow-sm border border-slate-200 space-y-6">
        <div className="space-y-2">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            Vite + React 19 + TypeScript + Tailwind v4
          </span>
          <h1 className="text-2xl font-bold tracking-tight">
            프로젝트 환경 세팅이 완료되었습니다
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-800">
              src/App.tsx
            </code>{' '}
            파일을 수정하여 바로 개발을 시작할 수 있습니다.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setCount((prev) => prev + 1)}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 active:scale-[0.98] cursor-pointer"
          >
            Count: {count}
          </button>
          <button
            type="button"
            onClick={() => setCount(0)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 cursor-pointer"
          >
            초기화
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
