
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditProducts(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined"   />
<TextInput source="desc" variant="outlined"   />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}