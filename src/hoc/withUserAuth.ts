import useUserAuth from "../hooks/useUserAuth";

const WithUserAuth = (props: any) => useUserAuth(props) && props.children;

export default WithUserAuth;
