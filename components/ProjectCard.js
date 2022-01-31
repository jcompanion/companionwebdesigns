import React, { useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import cardImg from "../public/images/logo.png";
import { Dialog, Transition } from "@headlessui/react";

const ProjectCard = ({ props }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div
        onClick={openModal}
        className="transition-all relative project break-inside bg-brand dark:hover:shadow-cyan-500/50 rounded-lg shadow-md hover:shadow-xl hover:cursor-pointer"
      >
        <div className="absolute text-white left-4 top-4 flex flex-col justify-items-center z-10">
          <h3 className="text-md font-bold text-gray-100 tracking-wide">
            {props.client}
          </h3>
          <h1 className="text-lg font-bold tracking-wide text-gray-200">
            {props.title}
          </h1>
        </div>
        {props.image ? (
          <img
            className="transition-all rounded-lg hover:opacity-30"
            src={props.image.url}
            alt="project image"
          />
        ) : null}
      </div>

      {/* modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {props.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{props.article}</p>
                </div>
                <div className="flex flex-row justify-center">
                  <div className="mt-4">
                    <Link href={props.buttonlink}>
                      <button
                        type="button"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex justify-center px-4 py-2 mx-4 text-sm font-medium text-brand bg-brand border bg-opacity-20 border-transparent rounded-md hover:bg-opacity-40"
                      >
                        Check it out
                      </button>
                    </Link>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 mx-4 text-sm font-medium text-brand border border-brand hover:bg-gray-200 rounded-md hover:bg-opacity-40 "
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProjectCard;
