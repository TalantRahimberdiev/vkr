import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, useMantineTheme } from '@mantine/core';
import { useGalleryQuery } from '../../rtk/API';

const useStyles = createStyles((theme) => ({
  card: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  description: {
    background: 'black',
    color: 'yellow',
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}))


function Card({ foto, description }) {
  const { classes } = useStyles()

  return (
    <Paper shadow="md" p="xl" radius="md" sx={{ backgroundImage: `url(${foto})` }} className={classes.card}>
      <Text className={classes.description} size="xs">{description}</Text>
    </Paper>
  )
}

export default function Foto_Gallery() {

  const { data } = useGalleryQuery()
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

  const slides = data?.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <>
      <Carousel
        slideSize="100%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 1}
      >
        {slides}
      </Carousel>
    </>
  )
}