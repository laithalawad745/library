import Image from "next/image";
import { Home } from 'telecop';
import 'telecop/style.css';
export default function Homes() {
  return (
<div> 

 <Home
  name="Your Name"
  title="Your Title"
  backgroundGradient="linear-gradient(308deg, #a70b0b 0%, #000000 75%)"
/>
</div>
  );
}
