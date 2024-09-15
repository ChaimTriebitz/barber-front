import { Date, DropDown, Remove, Select, Text} from '..'

export const Cells = ({row, header }) => {
   switch (header.cell_type) {
      case 'remove': return <Remove row={row} />
      case 'select': return <Select row={row} />
      case 'dropDown': return <DropDown row={row} header={header}  />
      case 'text': return <Text row={row} header={header} />
      case 'date': return <Date row={row} header={header} />
   }
}