interface VariableInterface {
  [key: string]: {
    hasClosingTag: boolean
    description: string
    snippet: string
  }
}

export default VariableInterface;