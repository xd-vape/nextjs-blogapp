import React from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { User, Lock, Mail, Calendar, BadgeCheckIcon } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProfileDetail() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return;
  }

  const userCreateDate = new Date(session.user.createdAt);
  const formattedDate = userCreateDate.toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });

  const isTeam = ["admin"].includes(session.user.role);

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Sicherheit
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          {/* User Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Grundlegende Kontoinformationen und Profilangaben.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src="/diverse-user-avatars.png"
                    alt="Profile picture"
                  />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{session.user.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    {session.user.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Beigetretten seit {formattedDate}
                  </div>
                  {isTeam && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-500 text-white dark:bg-blue-600"
                    >
                      <BadgeCheckIcon />
                      Admin
                    </Badge>
                  )}
                </div>
              </div>

              <Separator />

              {/* <form onSubmit={"handleUsernameChange"} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={"username"}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                  />
                  <p className="text-sm text-muted-foreground">
                    This is your public display name. It can be your real name
                    or a pseudonym.
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  <p className="text-sm text-muted-foreground">
                    We'll use this email to contact you about your account.
                  </p>
                </div>
              </form> */}
            </CardContent>
            <CardFooter>
              <Button onClick={"handleUsernameChange"}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          {/* Password Change Card */}
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password to keep your account secure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <form onSubmit={"handlePasswordChange"} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    value={"currentPassword"}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter your current password"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={"newPassword"}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your new password"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Password must be at least 8 characters long.
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={"confirmPassword"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your new password"
                    required
                  />
                </div>
              </form> */}
            </CardContent>
            <CardFooter>
              <Button onClick={"handlePasswordChange"} className="w-full">
                Update Password
              </Button>
            </CardFooter>
          </Card>

          {/* Security Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>Security Information</CardTitle>
              <CardDescription>
                Additional security details about your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security
                  </p>
                </div>
                <Badge variant="outline">Not Enabled</Badge>
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Last Password Change</p>
                  <p className="text-sm text-muted-foreground">
                    December 15, 2024
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Login Sessions</p>
                  <p className="text-sm text-muted-foreground">
                    Manage your active sessions
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View Sessions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      {/* <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <Input id="email" type="email" placeholder="m@example.com" required />
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card> */}
    </div>
  );
}
