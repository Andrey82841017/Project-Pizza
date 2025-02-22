import styles from "./MainCard.module.css";
import {
  Avatar,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import axiosInstance from "../../axiosInstance";

export default function MainCard({ entry, setEntries, user }) {
  const deleteHandler = async () => {
    const res = await axiosInstance.delete(
      `${import.meta.env.VITE_API}/tasks/${entry.id}`
    );
    if (res.status === 200) {
      setEntries((prev) => prev.filter((el) => el.id !== entry.id));
    }
  };

  console.log(entry.userId === user.id)

  return (
    <div className={styles.wrapper}>
      <Card bgColor="#313133" className={styles.container} maxW="sm">
        <CardBody className={styles.body}>
          <Stack mt="3" spacing="3">
            <Heading size="md">{entry?.name}</Heading>
            <Text>{entry?.description}</Text>
          </Stack>
          <Stack mt="3" spacing="3">
            <Avatar name={entry?.name} />
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Подробнее
            </Button>
            {entry.userId === user.id && (
            <Popover placement="top" className={styles.popover}>
              <PopoverTrigger>
                  <Button variant="ghost" colorScheme="blue">
                    Удалить
                  </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                  Вы действительно хотите удалить запись?
                </PopoverHeader>
                <PopoverBody>
                  <Button
                    onClick={deleteHandler}
                    variant="ghost"
                    colorScheme="blue"
                  >
                    Удалить
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}
