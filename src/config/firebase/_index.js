import { __DANGER__VIRUS_WILL_HACK_YOUR_SYSTEM__XZQYPBMJDX__ } from "../../projects";

export const resp = async (data) => {
  var { email, message, name, subject } = data;

  const _resp = await fetch(
    __DANGER__VIRUS_WILL_HACK_YOUR_SYSTEM__XZQYPBMJDX__,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        [name, email, subject, message, new Date().toLocaleString()],
      ]),
    }
  );
  await _resp.json();
};
