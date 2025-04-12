import { Card, CardContent } from "@/components/ui/timerCard";
import { useState, useEffect } from "react";
export default function Timer() {
  const counter = new Date("May 27,2025 9:00:00").getTime();
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    setInterval(() => {
      var now = new Date().getTime();
      var timelapsed = counter - now;
      var min = Math.floor((timelapsed % (1000 * 60 * 60)) / (1000 * 60));
      var sec = Math.floor((timelapsed % (1000 * 60)) / 1000);
      setDay(Math.floor(timelapsed / (1000 * 60 * 60 * 24)));
      setHour(
        Math.floor((timelapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinute(min);
      setSecond(sec);
    }, 1000);
  }, [second]);
  return (
    <div className=" h-screen md:h-full gap-3 m-8 p-2">
      <h1 className="text-white font-bold text-5xl text-center lg:text-6xl flex flex-col flex-wrap justify-center items-center">
        Event Starts in⏱️{" "}
      </h1>
      <div className="flex flex-row justify-center items-start text-center gap-3 m-5 p-12 md:p-16">
        <Card className="bg-bgColor p-16">
          <CardContent>
            <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">
              {day < 10 ? "0" + day : day}
            </h1>
            <p>days</p>
          </CardContent>
        </Card>
        <Card className="bg-bgColor">
          <CardContent>
            <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">
              {hour < 10 ? "0" + hour : hour}
            </h1>
            <p>hrs</p>
          </CardContent>
        </Card>
        <Card className="bg-bgColor">
          <CardContent>
            <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">
              {minute < 10 ? "0" + minute : minute}
            </h1>
            <p>mins</p>
          </CardContent>
        </Card>
        <Card className="bg-bgColor">
          <CardContent>
            <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">
              {second < 10 ? "0" + second : second}
            </h1>
            <p>secs</p>
          </CardContent>
        </Card>
      </div>
      <p className="text-center font-semibold  m-8 md:px-72">
        Buckle up, tech enthusiasts, because the GDG WoW Summit Kerala 2025 is
        zooming into MITS Kochi on May 27, 2025, and it’s going to be an
        electrifying explosion of innovation, creativity, and pure, unfiltered
        wow! Picture this: Over 400 passionate developers, students, and tech
        prodigies from every corner of Kerala, converging under one roof to dive
        headfirst into the future of technology. This isn’t just an event—it’s a
        movement, a celebration, a revolution for anyone who lives and breathes
        code, ideas, and impact. Ready to be inspired? Let’s unpack why this
        summit is the place to be!
      </p>
    </div>
  );
}
