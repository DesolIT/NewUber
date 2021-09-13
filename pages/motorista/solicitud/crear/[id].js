import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Solicitud from "../../../../components/solicitud";

const Crear = (props) => {
    const router = useRouter();
    const [id, setId] = useState(null);
  
    useEffect(() => {
      setId(router.query.id);
    }, [router.query]);
  
    return (
      <div>
        <Solicitud id={id} />
        
      </div>
    );
  };
  
  export default Crear;
  