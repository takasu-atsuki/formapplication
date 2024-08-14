interface EmailTemplate {
  username: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplate>> = ({
  username,
  email,
  content,
}) => (
  <div>
    <h1>こんにちは、{username}です。</h1>
    <p>{email}から届きました。</p>
    <p>{content}</p>
  </div>
);
