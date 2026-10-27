import { Component } from 'react'

class ErrorBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-cream-100 px-4">
          <div className="w-full max-w-md rounded-xl border border-line bg-cream-50 p-8 text-center shadow-card">
            <p className="font-display text-[28px] text-ink">មានបញ្ហាបច្ចេកទេស</p>
            <p className="mt-2 text-[12px] leading-7 text-ink-soft">
              ទំព័រនេះមិនអាចបង្ហាញបានទេ។ សូមផ្ទុកឡើងវិញ ឬត្រឡប់ទៅផ្នែកទទួលភ្ញៀវ។
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 inline-flex h-9 items-center justify-center rounded-lg border border-brand bg-brand px-4 text-[12px] font-medium text-cream-50 transition hover:bg-brand-strong"
            >
              ផ្ទុកឡើងវិញ
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default function RouteGuard({ children }) {
  return <ErrorBoundary>{children}</ErrorBoundary>
}
