"use client";
import { Timeline as TimelineFlowbite, TimelineProps as TimelineFlowbiteProps } from "flowbite-react";
import React from "react";

interface TimelineProps extends TimelineFlowbiteProps {
    classItem?: string;
    data: {
        date: string;
        position: string;
        responsibilities: string[];
    }[];
};

export default function Timeline({ data, classItem, ...props}: TimelineProps) {
  return (
    <TimelineFlowbite {...props}>
      {data.map((experience) => (
        <TimelineFlowbite.Item key={experience.date} className={classItem}>
          <TimelineFlowbite.Point />
          <TimelineFlowbite.Content>
            <TimelineFlowbite.Time>{experience.date}</TimelineFlowbite.Time>
            <TimelineFlowbite.Title>{experience.position}</TimelineFlowbite.Title>
            <TimelineFlowbite.Body>
              <ul>
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </TimelineFlowbite.Body>
          </TimelineFlowbite.Content>
        </TimelineFlowbite.Item>
      ))}
    </TimelineFlowbite>
  );
}
