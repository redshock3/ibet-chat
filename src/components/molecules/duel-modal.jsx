import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Modal } from "../atoms/modal";
import { Button } from "../atoms/button";
import { Input } from "../atoms/form/input";
import useHookForm from "@/hooks/useHookForm";
import createSchema from "@/helpers/createSchema";

const schema = createSchema({
  match: "required",
  time: "required",
});
const values = {
  match: "",
  time: "",
};

export function DuelModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useHookForm(values, schema);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {step === 1 && (
        <div className="text-center">
          <img
            src="/icons/duel.svg"
            alt="duel"
            className="w-[80px] h-[70px] m-auto"
          />
          <p className="my-4 font-bold">
            {t("duel_with_player")} <br /> ALEX777
          </p>
          <div className="grid grid-cols-2 gap-4 mt-7">
            <Button onClick={() => setStep(2)}>{t("yes")}</Button>
            <Button onClick={onClose} scheme="bordered">
              {t("no")}
            </Button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <p className="text-center text-xs opacity-50">16.02.2024</p>
          <div className="flex justify-between items-center mt-10">
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/lego/0.jpg"
                alt="avatar"
                className="w-[40px] rounded-full m-auto"
              />
              <p className="font-bold mt-2 text-xs">Alex777</p>
            </div>
            <img src="/icons/duel.svg" alt="duel" className="w-[80px] m-auto" />
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/lego/3.jpg"
                alt="avatar"
                className="w-[40px] rounded-full m-auto"
              />
              <p className="font-bold mt-2 text-xs">Mysterio</p>
            </div>
          </div>
          <div className="grid gap-7 mt-12">
            <Input
              name="match"
              control={control}
              errors={errors}
              label={t("who_plays")}
              labelStyles={css.label}
              styles={{ textAlign: "center", fontWeight: 500 }}
            />
            <Input
              name="time"
              control={control}
              errors={errors}
              label={t("when")}
              labelStyles={css.label}
              styles={{ textAlign: "center", fontWeight: 500 }}
            />
            <Input
              name="winner"
              control={control}
              errors={errors}
              label={t("winner")}
              labelStyles={css.label}
              styles={{ textAlign: "center", fontWeight: 500 }}
            />
            <Input
              name="amount"
              control={control}
              errors={errors}
              label={t("my_amount")}
              labelStyles={css.label}
              styles={{ textAlign: "center", fontWeight: 500 }}
            />
            <div className="relative mt-5">
              <img
                src="/button-coin.png"
                alt=""
                className="absolute -left-2 -top-4 z-10"
              />
              <Button styles="w-full !pl-20">
                Поставить 100$ <br /> на победу Luton
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

const css = {
  label: {
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    opacity: 1,
  },
};
