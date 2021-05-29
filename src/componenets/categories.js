import * as React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  DateField,
  TextField,
  EditButton,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const CategoryIcon = BookIcon;

export const CategoryList = (props) => (
  <List {...props}>
    <Datagrid>
      <ReferenceInput label='Session' source='id' reference='sessions'>
        <SelectInput optionText='name_promo' optionValue='_id' />
      </ReferenceInput>

      <TextField source='sub_category' />
      {/* <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="average_note" />
            <TextField source="views" />
            <EditButton basePath="/categories" /> */}
    </Datagrid>
  </List>
);

const CategoryTitle = ({ record }) => {
  return <span>Category {record ? `"${record.title}"` : ''}</span>;
};

export const CategoryEdit = (props) => (
  <Edit title={<CategoryTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='title' />
      <TextInput source='teaser' options={{ multiline: true }} />
      <TextInput multiline source='body' />
      <DateInput label='Publication date' source='published_at' />
      <TextInput source='average_note' />
      <TextInput disabled label='Nb views' source='views' />
    </SimpleForm>
  </Edit>
);

export const CategoryCreate = (props) => (
  <Create title='Create a Category' {...props}>
    <SimpleForm>
      <TextInput source='title' />
      <TextInput source='teaser' options={{ multiline: true }} />
      <TextInput multiline source='body' />
      <TextInput label='Publication date' source='published_at' />
      <TextInput source='average_note' />
    </SimpleForm>
  </Create>
);
