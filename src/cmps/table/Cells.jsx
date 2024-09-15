import { Text } from '..'

export const Cells = ({row, header }) => {
console.log(header.cell_type);

   switch (header.cell_type) {
      // case 'remove': return <Remove Row={Row} />
      // case 'select': return <Select Row={Row} />
      // case 'image': return <Image value={value} field={header}/>
      // case 'status': return <Status  value={value} Row={Row} field={header} />
      // case 'dropDown': return <DropDown Row={Row} field={header}  />
      case 'text': return <Text row={row} header={header} />
   }
}