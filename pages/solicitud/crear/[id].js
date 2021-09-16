import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Solicitud from "../../../components/solicitud"
import Layout from "../../../components/Layout";
const Crear = (props) => {
    const router = useRouter();
    const [id, setId] = useState(null);
  
    useEffect(() => {
      setId(router.query.id);
    }, [router.query]);
  
    return (
      <div>
        <Layout>
          <Solicitud id={id} />
        </Layout>
      </div>
        
    );
  };
  
  export default Crear;

  