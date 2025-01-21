"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface TestimonyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TestimonyModal({ isOpen, onClose }: TestimonyModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [testimony, setTestimony] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the testimony data to your backend
    console.log("Testimony submitted:", { name, email, testimony })
    // Reset form and close modal
    setName("")
    setEmail("")
    setTestimony("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-white">Share Your Testimony</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-zinc-800 border-[#FF8C00] text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-zinc-800 border-[#FF8C00] text-white"
            />
          </div>
          <div>
            <label htmlFor="testimony" className="block text-sm font-medium text-gray-400 mb-1">
              Your Testimony
            </label>
            <Textarea
              id="testimony"
              value={testimony}
              onChange={(e) => setTestimony(e.target.value)}
              required
              rows={4}
              className="bg-zinc-800 border-[#FF8C00] text-white"
            />
          </div>
          <Button type="submit" className="w-full bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white">
            Submit Testimony
          </Button>
        </form>
      </div>
    </div>
  )
}

