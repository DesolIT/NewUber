import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Form from "../../../components/form";
import { useRouter } from "next/router";

const Edit = (props) => {
  const router = useRouter();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(router.query.id);
  }, [router.query]);

  return (
    <div>
      <Form id={id} />
    </div>
  );
};

Edit.propTypes = {};

export default Edit;
