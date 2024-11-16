import { Container } from './styles'

export function SelectInput({ icon: Icon, options }) {
  return (
    <Container>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="chevron">
        {Icon && <Icon size={15} />}
      </div>
    </Container>
  )
}