
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditUser(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="email" variant="outlined" validate={required()}  />

      </SimpleForm>
    </Edit>
  );
}