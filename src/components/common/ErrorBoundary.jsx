import { Component } from 'react'
import { AlertTriangle } from 'lucide-react'

export class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null } }
  static getDerivedStateFromError(error) { return { hasError: true, error } }
  componentDidCatch(error, info) { console.error('ErrorBoundary caught:', error, info) }
  render() {
    if (this.state.hasError) return (
      <div className="flex flex-col items-center justify-center p-10 gap-4">
        <AlertTriangle size={40} className="text-amber-400" />
        <div className="text-center">
          <p className="text-gray-200 font-medium mb-1">Something went wrong</p>
          <p className="text-gray-500 text-sm">{this.state.error?.message}</p>
        </div>
        <button onClick={() => this.setState({ hasError: false })} className="btn-primary text-sm">Try again</button>
      </div>
    )
    return this.props.children
  }
}
