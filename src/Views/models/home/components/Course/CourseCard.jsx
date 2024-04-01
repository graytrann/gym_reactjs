import React, { useEffect, useState } from "react";
import {
  Paper,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";
import { getAllCourse } from "../../../../../Controllers/course";

const CourseCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const coursesData = await getAllCourse();
        setCourses(coursesData);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Container
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={5}>
          {courses.map((course, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Paper elevation={3}>
                <Card style={{ padding: "10px", marginBottom: "30px" }}>
                  <CardMedia component="img" height="140" image="./Sergi-Constance-2.webp" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.NameCourse}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.Description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {course.Price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Goal: {course.Goal}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CourseCard;
