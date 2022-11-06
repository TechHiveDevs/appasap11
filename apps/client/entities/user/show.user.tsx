
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
} from "react-admin";

// ------------------------------------------------

export default function ShowUser(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="name" />
<TextField source="email" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}