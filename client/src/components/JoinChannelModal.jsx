import { useRef } from "react";
import { createPortal } from "react-dom";
import useStore from "../store/useStore";
import { joinChannel } from "../utils/api";
export default function JoinChannelModal({ channel }) {
  const passwordRef = useRef();
  const getUser = useStore((state) => state.getUser);
  const joinChannelHandler = async (e) => {
    e.preventDefault();
    if (channel.hasPassword && !passwordRef.current.value) {
      return;
    }
    try {
      await joinChannel(channel.name);
      await getUser();
    } catch (e) {
      console.error(e);
    }
  };
  return createPortal(
    <>
      <input
        type="checkbox"
        id={`${channel.name}-modal`}
        className="modal-toggle"
      />
      <label htmlFor={`${channel.name}-modal`} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-secondary">{channel.name}</h3>
          <p className="py-4">{channel.description}</p>
          <form
            onSubmit={joinChannelHandler}
            className="flex flex-col items-center"
          >
            {channel.hasPassword && (
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full my-2 max-w-xs"
                ref={passwordRef}
              />
            )}
            <button className="btn glass my-1" type="submit">
              Join {channel.name}
            </button>
          </form>
        </label>
      </label>
    </>,
    document.getElementById("portal")
  );
}
