export default function validate(value: string | number, state: any): void {
  if (value) {
    state(false)
  } else {
    state(true)
    value = ''
  }
}
