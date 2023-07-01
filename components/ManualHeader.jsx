import { useMoralis } from "react-moralis";
import { useEffect } from "react";

function Home() {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnabledLoading,
  } = useMoralis();
  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) enableWeb3();
    }
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged(() => {
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Account Not Found!!!");
      }
      console.log(`Account changed to ${account}`);
    });
  }, []);

  return (
    <div>
      {account ? (
        <p>Connected to {account}</p>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== undefined) {
              window.localStorage.setItem("connected", "injected");
            }
          }}
        >
          Connect
        </button>
      )}
    </div>
  );
}

export default Home;
