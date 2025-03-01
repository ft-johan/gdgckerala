import { Card, CardContent } from "@/components/ui/timerCard";
import { useState, useEffect } from "react";
export default function Timer() {
  const counter = new Date("March 28,2025 9:30:00").getTime();
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
      setHour(Math.floor((timelapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinute(min);
      setSecond(sec);
    }, 1000)
  }, [second])
  return (
    <div className=" min-h-screen md:min-h-screen gap-3 m-1 p-2">
      <h1 className="text-white font-bold text-5xl text-center lg:text-6xl flex flex-col flex-wrap justify-center items-center">
        Time is ticking⏱️ </h1>
      <div className="flex flex-row justify-center items-start text-center gap-3 m-5 p-12 md:p-16">
      <Card className="bg-bgColor p-16">
        <CardContent>
          <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">{day < 10 ? '0' + day : day}</h1>
          <p>days</p>
        </CardContent>
      </Card>
      <Card className="bg-bgColor">
        <CardContent>
          <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">{hour < 10 ? '0' + hour : hour}</h1>
          <p>hrs</p>
        </CardContent>
      </Card>
      <Card className="bg-bgColor">
        <CardContent>
          <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">{minute < 10 ? '0' + minute : minute}</h1>
          <p>mins</p>
        </CardContent>
      </Card>
      <Card className="bg-bgColor">
        <CardContent>
          <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">{second < 10 ? '0' + second : second}</h1>
          <p>secs</p>
        </CardContent>
      </Card>
      </div>
      <p className="text-center md:px-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam tenetur maxime perspiciatis eveniet dolorum corrupti corporis nisi quod. Alias unde cum est distinctio perspiciatis? Id, eveniet at, optio ipsam quidem iste modi error porro vero iusto cupiditate reiciendis neque. Officiis modi a fuga mollitia nobis eaque corporis perferendis repellendus! Rerum nisi saepe quaerat! Quisquam, distinctio. Dolorum voluptatum illum dolores eius alias, suscipit quisquam amet delectus cumque magnam enim, consequuntur, fuga obcaecati animi nihil nisi ullam aspernatur facilis omnis minus. Aperiam explicabo dolorem cum distinctio dolores, eaque dolorum ipsam cupiditate est? Ab magni voluptatem dolores impedit fuga architecto inventore rem!</p>

    </div>
  );
}
