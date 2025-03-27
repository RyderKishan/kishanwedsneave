import { Checkbox, Dialog } from 'radix-ui';
import { Cross2Icon } from '@radix-ui/react-icons';

import React from 'react';
import { motion } from 'motion/react';
import { CheckIcon } from '@radix-ui/react-icons';
import './index.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { RsvpFormDataType } from '@/types';
import { encode } from '@/utils';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required(),
    pax: yup.number().min(1).max(10).required(),
    accNeeded: yup.boolean(),
    message: yup.string(),
  })
  .required();

const RsvpForm: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RsvpFormDataType>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      contact: '',
      pax: 0,
      accNeeded: false,
      message: '',
    },
  });

  const onSubmit: SubmitHandler<RsvpFormDataType> = (data) => {
    if (process.env.NODE_ENV === 'production') {
      axios
        .post(
          '/api/v1/mail',
          { data: encode(JSON.stringify(data)) },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
              'x-api-key': encode(`${new Date().valueOf()}`),
            },
          },
        )
        .then(() => {})
        .catch(() => {});
    } else {
      axios
        .post(
          'https://webhook.site/1fa91e38-131f-4ecc-86b2-033853964371',
          data,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
            },
          },
        )
        .then(() => {
          localStorage.setItem('kwn:emailSent', 'true');
        })
        .catch(() => {});
    }
    reset();
    setIsOpen(false);
  };

  React.useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <motion.button
          className="bg-(--foreground) text-(--background) p-2 rounded cursor-pointer font-semibold"
          onClick={() => {}}
        >
          RSVP
        </motion.button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed z-10 opacity-20" />
        <Dialog.Content className="DialogContent shadow-md bg-(--background) rounded-2xl p-6 fixed">
          <Dialog.Title className="text-xl font-bold">
            Submit your RSVP
          </Dialog.Title>
          <Dialog.Description className="my-2">
            Please fill in your details to confirm your attendance.
          </Dialog.Description>
          <div className="py-4 flex flex-col gap-6">
            <fieldset className="flex gap-2 items-center">
              <label
                className="whitespace-nowrap font-bold text-(--foreground)"
                htmlFor="name"
              >
                Name
              </label>
              <div className="w-full">
                <input
                  className="w-full p-2 outline-0 border-2 border-(--background) focus:border-(--foreground) rounded transition-all"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register('name')}
                />
                {errors.name?.message && (
                  <span className="text-red-500 pl-2 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </fieldset>
            <fieldset className="flex gap-2 items-center">
              <label
                className="whitespace-nowrap font-bold text-(--foreground)"
                htmlFor="email"
              >
                Email
              </label>
              <div className="w-full">
                <input
                  className="w-full p-2 outline-0 border-2 border-(--background) focus:border-(--foreground) rounded transition-all"
                  type="email"
                  id="email"
                  placeholder="user@example.com"
                  {...register('email')}
                />
                {errors.email?.message && (
                  <span className="text-red-500 pl-2 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </fieldset>
            <fieldset className="flex gap-2 items-center">
              <label
                className="whitespace-nowrap font-bold text-(--foreground)"
                htmlFor="contact"
              >
                Contact
              </label>
              <div className="w-full">
                <input
                  className="w-full p-2 outline-0 border-2 border-(--background) focus:border-(--foreground) rounded transition-all"
                  type="tel"
                  id="contact"
                  placeholder="+91 9876543210"
                  {...register('contact')}
                />
                {errors.contact?.message && (
                  <span className="text-red-500 pl-2 text-sm">
                    {errors.contact.message}
                  </span>
                )}
              </div>
            </fieldset>
            <fieldset className="flex gap-2 items-center">
              <label
                className="whitespace-nowrap font-bold text-(--foreground)"
                htmlFor="pax"
              >
                No of Pax
              </label>
              <div className="w-full">
                <input
                  className="w-full p-2 outline-0 border-2 border-(--background) focus:border-(--foreground) rounded transition-all"
                  type="number"
                  id="pax"
                  placeholder="0"
                  {...register('pax')}
                />
                {errors.pax?.message && (
                  <span className="text-red-500 pl-2 text-sm">
                    {errors.pax.message}
                  </span>
                )}
              </div>
            </fieldset>
            <fieldset className="flex gap-2 items-center">
              <label className="font-bold text-(--foreground)" htmlFor="c1">
                Accomodation required
              </label>
              <Checkbox.Root
                className="w-6 h-6 flex items-center outline-0 justify-center border-2 border-(--hover-background) focus:border-(--hover-foreground) rounded transition-all"
                id="c1"
              >
                <Checkbox.Indicator className="text-(--foreground)">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
            </fieldset>
            <fieldset className="flex gap-2 items-center">
              <label
                className="whitespace-nowrap font-bold text-(--foreground)"
                htmlFor="message"
              >
                Additional Message
              </label>
              <div className="w-full">
                <textarea
                  className="w-full p-2 outline-0 border-2 border-(--background) focus:border-(--foreground) rounded transition-all"
                  id="message"
                  placeholder="Any questions to ask? Or any special requests?"
                  rows={3}
                  {...register('message')}
                />
                {errors.pax?.message && (
                  <span className="text-red-500 pl-2 text-sm">
                    {errors.pax.message}
                  </span>
                )}
              </div>
            </fieldset>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end',
            }}
          >
            <motion.button
              className="bg-(--foreground) hover:bg-(--hover-foreground) text-(--background) p-2 rounded cursor-pointer font-semibold"
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
            >
              Send
            </motion.button>
          </div>
          <Dialog.Close asChild>
            <motion.button
              className="w-8 h-8 grid place-content-center bg-(--background) hover:bg-(--hover-background) text-(--foreground) IconButton cursor-pointer rounded-full absolute top-4 right-4"
              aria-label="Close"
            >
              <Cross2Icon />
            </motion.button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RsvpForm;
