
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateUser(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="email" variant="outlined" validate={required()}  />

        </SimpleForm>
      </Create>
    );
  }
