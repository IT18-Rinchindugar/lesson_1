import { Input, Container, Spacer, Button, Text } from "@nextui-org/react";
import React, { useState } from "react";

function Lab5() {
  const [val, setVal] = useState("");
  const [cache, setCache] = useState("");
  const [hurd, setHurd] = useState("");

  const [sumTime, setSumTime] = useState(0);
  const onChange = () => {
    if (!val || !cache || !hurd) {
      return;
    }
    setSumTime((hurd / 100) * cache + ((100 - hurd) / 100) * val);
  };
  return (
    <Container
      style={{
        display: "flex",
        marginTop: 300,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section>
        <Input
          fullWidth
          type="number"
          value={val}
          onChange={(v) => setVal(v.target.value)}
          clearable
          bordered
          labelPlaceholder="Санах ойд хандах хугацаа"
          defaultValue={0}
        />
        <Spacer y={2} />
        <Input
          type="number"
          value={cache}
          onChange={(v) => setCache(v.target.value)}
          clearable
          bordered
          labelPlaceholder="Кешид хандах хугацаа"
          defaultValue={0}
        />
        <Spacer y={2} />
        <Input
          type="number"
          value={hurd}
          onChange={(v) => setHurd(v.target.value)}
          clearable
          bordered
          labelPlaceholder="Хит хурд"
          defaultValue={0}
        />
        <Spacer y={1} />
        <Button onClick={onChange}>Хугацааг олох</Button>
        <Spacer y={2} />
        {!!sumTime && (
          <section>
            <Text>Үр ашигтай хандах хугацаа: </Text>
            <Spacer y={0.5} />
            <Text>{`${sumTime}ns`}</Text>
          </section>
        )}
      </section>
    </Container>
  );
}

export default Lab5;
