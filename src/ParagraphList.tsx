import {
  Datagrid,
  EditButton,
  List,
  ListProps,
  NumberField,
  TextField,
} from "react-admin";

const ParagraphList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField sortBy="paragraph.id" />
        <TextField source="title" />
        <TextField source="description" />
        <EditButton />;
      </Datagrid>
    </List>
  );
};

export default ParagraphList;
