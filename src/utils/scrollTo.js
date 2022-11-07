export const scrollToTop = y => {
  const c = y || 0
  window.scrollTo({
    top: c,
    behavior: "smooth",
  })
}

export const scrollToEl = elementId => {
  if (!elementId) return
  if (!document.getElementById(elementId)) return
  const demoForm = document.getElementById(elementId).getBoundingClientRect()
  const currentY = window.scrollY
  scrollToTop(currentY + demoForm.top - 100)
}
